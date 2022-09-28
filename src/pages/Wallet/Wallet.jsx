import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WalletCard from "../../components/WalletCard/WalletCard";
import WalletDropDown from "./WalletDropDown";
import PrintAndDownload from "../../components/PrintAndDownload/PrintAndDownloadButton";
import BarChartContainer from "../../components/Charts/BarChart/BarChart";
import { SearchIcon } from "../../components/SideBar/icons";
import Table from "../../components/Table/Table";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

function Balance(params) {
  return (
    <p
      className={
        params.row.transactionType === "Credit"
          ? "text-success mb-0"
          : "text-danger mb-0"
      }
    >
      ₦ {params.row.balance}
    </p>
  );
}

function Wallet() {
  const chartData = [
    {
      id: 1,
      day: "Monday",
      funds: 3883,
    },
    {
      id: 2,
      day: "Tuesday",
      funds: 8883,
    },
    {
      id: 3,
      day: "Wednesday",
      funds: 283,
    },
    {
      id: 4,
      day: "Thursday",
      funds: 983,
    },
    {
      id: 5,
      day: "Friday",
      funds: 1083,
    },
    {
      id: 6,
      day: "Saturday",
      funds: 6883,
    },
    {
      id: 7,
      day: "Sunday",
      funds: 2883,
    },
  ];

  // eslint-disable-next-line
  const [userData, setUserData] = useState({
    labels: chartData.map((data) => data.day),
    datasets: [
      {
        label: "Wallet Trend",
        data: chartData.map((data) => data.funds),
        backgroundColor: ["#08D231"],
      },
    ],
  });

  const dummyWallet = [
    {
      id: 1,
      date: "21 March, 2021",
      transactionType: "Credit",
      transactionCategory: "Fund Wallet",
      transactionId: "77266272",
      amount: "5,000",
      time: "3:45pm",
      balance: "2,000",
    },
    {
      id: 2,
      date: "22 March, 2022",
      transactionType: "Debit",
      transactionCategory: "Product Purchase",
      transactionId: "772669072",
      amount: "9,000",
      time: "3:35pm",
      balance: "8,000",
    },
    {
      id: 3,
      date: "22 March, 2022",
      transactionType: "Credit",
      transactionCategory: "Fund Wallet",
      transactionId: "772669072",
      amount: "9,000",
      time: "3:35pm",
      balance: "8,000",
    },
    {
      id: 4,
      date: "22 March, 2022",
      transactionType: "Credit",
      transactionCategory: "Fund Wallet",
      transactionId: "772669072",
      amount: "9,000",
      time: "3:35pm",
      balance: "8,000",
    },
  ];

  const columns = [
    {
      sortable: false,
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 150,
    },
    {
      sortable: false,
      field: "transactionType",
      headerName: "Transaction Type",
      flex: 1,
      minWidth: 160,
    },
    {
      sortable: false,
      field: "transactionCategory",
      headerName: "Transaction Category",
      flex: 1,
      minWidth: 200,
    },
    {
      sortable: false,
      field: "transactionId",
      headerName: "Transaction ID",
      flex: 1,
      minWidth: 170,
    },
    {
      sortable: false,
      field: "amount",
      headerName: "Amount",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => {
        return <Balance {...params} />;
      },
    },
    {
      sortable: false,
      field: "time",
      headerName: "Time",
      flex: 1,
      minWidth: 100,
    },
    {
      sortable: false,
      field: "balance",
      headerName: "Balance",
      flex: 1,
      minWidth: 130,
    },
    {
      sortable: false,
      field: "toggle",
      headerName: "",
      renderCell: (params) => {
        return <WalletDropDown {...params} />;
      },
    },
  ];

  const [sort, setSort] = useState("transactionCategory");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyWallet);
    // eslint-disable-next-line
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const findItem = dummyWallet.filter((item) => {
      return item[sort]
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });

    setData(findItem);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-8 mb-3">
          <div className="p-9 bg-white" style={{ height: 380 }}>
            <header className="flex justify-between mb-2">
              <p className="m-0">Wallet Trend</p>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                  <Select
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                    label="Sort"
                    name="sort"
                    defaultValue={0}
                  >
                    <MenuItem value={0}>Today</MenuItem>
                    <MenuItem value={1}>This Week</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </header>
            <BarChartContainer
              data={chartData}
              Xaxis="day"
              Yaxis="funds"
              datakey="funds"
              fill="#08D231"
            />
          </div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="p-3 bg-white">
            <WalletCard name="Estate Wallet" to={"/wallet"} />
            <div className="mt-5 mb-4 flex justify-between">
              <Link
                to={"/wallet/request"}
                style={{ backgroundColor: "#0556E5" }}
                className="text-white rounded-md p-4 no-underline"
              >
                Fund Wallet
              </Link>
              <Link
                to={"/wallet/request"}
                style={{ backgroundColor: "#E1ECFE", color: "#0556E5" }}
                className="rounded-md p-4 no-underline"
              >
                Request
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-7">
              <div className="flex items-baseline">
                <h6 className="mr-3 w-2/5">Transaction List</h6>
                <div className="ml-4 w-full">
                  <div className="mt-1 relative rounded-md h-9">
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
                      <Box
                        sx={{
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                          },
                        }}
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-10 border bg-transparent text-gray-500 rounded"
                      >
                        <FormControl fullWidth size="small" sx={{ border: 0 }}>
                          <Select
                            sx={{
                              "& legend": { display: "none" },
                              "& fieldset": { top: 0 },
                              border: 0,
                            }}
                            label="Sort By"
                            name="Sort By"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                          >
                            <MenuItem value={"transactionCategory"}>
                              Transaction Category
                            </MenuItem>
                            <MenuItem value={"amount"}>Amount</MenuItem>
                            <MenuItem value={"transactionType"}>
                              Transaction Type
                            </MenuItem>
                            <MenuItem value={"transactionId"}>
                              Transaction ID
                            </MenuItem>
                            <MenuItem value={"date"}>Date</MenuItem>
                            <MenuItem value={"time"}>Time</MenuItem>
                            <MenuItem value={"balance"}>Balance</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      {/* <select
                        id="SortBy"
                        name="SortBy"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-4 border bg-transparent text-gray-500 rounded"
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option value={"transactionCategory"}>
                          Transaction Category
                        </option>
                        <option value={"amount"}>Amount</option>
                        <option value={"transactionType"}>
                          Transaction Type
                        </option>
                        <option value={"transactionId"}>Transaction ID</option>
                        <option value={"date"}>Date</option>
                        <option value={"time"}>Time</option>
                        <option value={"balance"}>Balance</option>
                      </select> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <PrintAndDownload />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8" id="test-table-xls-button">
        <Table
          height="20vh"
          columns={columns}
          data={data}
          checkboxSelection={false}
        />
      </div>
    </div>
  );
}

export default Wallet;
