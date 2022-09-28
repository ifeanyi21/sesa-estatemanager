import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import LinearProgress from "@mui/material/LinearProgress";
import { SearchIcon } from "../../../components/SideBar/icons";

function Status(params) {
  return (
    <div
      className={
        params.row.status === "active"
          ? "text-success capitalize"
          : "text-orange-400 capitalize"
      }
    >
      {params.row.status}
    </div>
  );
}

function FullName(params) {
  return (
    <div className="capitalize">
      {params.row.f_name} {params.row.l_name}
    </div>
  );
}

function ResidentProfile() {
  const columns = [
    {
      sortable: false,
      field: "id",
      headerName: "Res. Code",
      flex: 1,
      minWidth: 170,
    },
    {
      sortable: false,
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 180,
      renderCell: (params) => {
        return <FullName {...params} />;
      },
    },
    {
      sortable: false,
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 180,
    },
    {
      sortable: false,
      field: "class",
      headerName: "Resident Class",
      flex: 1,
      minWidth: 200,
    },
    {
      sortable: true,
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 110,
      renderCell: (params) => {
        return <Status {...params} />;
      },
    },
  ];
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("f_name");
  const [loading, setLoading] = useState(true);

  const GetResidents = async () => {
    // const token = localStorage.getItem("sesaToken")

    // const req = await fetch("https://real.sesadigital.com/api/users", {
    //   method:"GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    //   },

    // });

    // const data = await req.json()

    const data = [
      {
        id: 1,
        f_name: "John",
        l_name: "Doe",
        gender: "Male",
        phone: "0806774763",
        noOfProfile: 3,
        status: "active",
        kyr: "Full Match",
      },
    ];

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    GetResidents();
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    if (searchValue.length > 0) {
      const findItem = data.filter((item) => {
        return item[sort]
          .toString()
          .toLocaleLowerCase()
          .includes(searchValue.toString().toLocaleLowerCase());
      });
      setData(findItem);
    } else {
      GetResidents();
    }
  };

  return (
    <div className="mt-8">
      <div className="col-lg-12">
        <div className="row items-baseline">
          <div className="col-lg-5">
            <div className="flex items-baseline">
              <div className="w-full">
                <div className="relative rounded-md h-9">
                  <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                    <span className="text-gray-500">
                      <SearchIcon />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 border-gray-300 rounded-md h-9"
                    placeholder="Search"
                    onChange={handleSearch}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Box>
                      <FormControl fullWidth size="small">
                        <Select
                          sx={{
                            "& legend": { display: "none" },
                            "& fieldset": { top: 0 },
                          }}
                          label="Sort"
                          name="sort"
                          defaultValue={"f_name"}
                          onChange={(e) => setSort(e.target.value)}
                        >
                          <MenuItem value={"f_name"}>Resident Name</MenuItem>
                          <MenuItem value={"id"}>Resident Code</MenuItem>
                          <MenuItem value={"category"}>Category</MenuItem>
                          <MenuItem value={"class"}>Resident Class</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 flex justify-end">
            <PrintAndDownload />
          </div>
        </div>
      </div>
      <Box
        sx={{
          height: 300,
          width: "100%",
          "& .MuiDataGrid-columnSeparator--sideRight": {
            display: "none !important",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600,
          },
          "& .MuiCheckbox-root": {
            color: "#D9D9D9",
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: "#0446B9",
          },
        }}
      >
        <div className="bg-white mt-8">
          <div style={{ width: "100%" }} className="bg-white">
            <DataGrid
              autoHeight
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              disableColumnMenu
              components={{
                LoadingOverlay: LinearProgress,
              }}
              loading={loading}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default ResidentProfile;
