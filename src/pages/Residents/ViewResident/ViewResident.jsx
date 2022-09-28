import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PrintAndDownload from "../../../components/PrintAndDownload/PrintAndDownloadButton";
import ValidateUserBtn from "./ValidateUserbtn";
import { KYRSTATUSICON } from "../../../components/SideBar/icons";
import User from "../../../images/security.jpeg";
//import { Skeleton } from "@mui/material";
import ViewImage from "../../../components/ViewPageImage/ViewImage";
import ResidentProfiles from "./ResidentProfiles";
import Spinner from 'react-bootstrap/Spinner';



function LoadingScreen() {
  return (
    <div className="p-5 my-auto text-center h-screen">
         <Spinner animation="border" variant="primary" />
     
      {/* <Skeleton animation="wave" variant="circular" width={144} height={144} /> */}
      {/* <div className="my-auto">
      
      </div> */}
      {/* <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={300}
      /> */}
    </div>
  );

}

function ViewResident() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //eslint-disable-next-line
  const navigate = useNavigate();
  //eslint-disable-next-line
  const { id } = useParams();

  const GetResidents = useCallback(async () => {
    // const token = localStorage.getItem("sesaToken")

    // const req = await fetch("https://real.sesadigital.com/api/users", {
    //   method:"GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    //   },

    // });

    //       const data = await req.json()

    //       const currentResident = data.filter(resident => {
    //           return resident.id.toString() === id
    //       })

    //if (currentResident.length === 1) {
    const resident = [
      {
        id: 1,
        f_name: "john",
        l_name: "ayuk",
        email: "me@me.com",
        phone: "090584738",
        id_type: "nin",
        id_number: "12389",
        status: "active",
        gender: "male",
        image: "null",
        estate_id: 2,
        email_verified_at: null,
        created_at: "2022-09-07T18:45:33.000000Z",
        updated_at: "2022-09-07T18:45:33.000000Z",
        estate: {
          id: 2,
          name: "shelter Afrique estate",
          address: "oron road",
          no_of_resident_users: "300",
          security_company: "proton security",
          phone: "+234 904758623",
          status: "Active",
          latitude: "25689",
          longitude: "205768",
          description: "the estate of the year!",
          manager_id: 5,
          created_at: "2022-09-07T18:13:31.000000Z",
          updated_at: "2022-09-07T18:13:31.000000Z",
        },
      },
    ];
    setData(resident);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // } else {
    // navigate('/residents')
    // }
  }, []);

  useEffect(() => {
    GetResidents();
  }, [GetResidents]);

  return (
    <div>
      <Link to="/residents" className="no-underline text-sm">
        Residents
      </Link>{" "}
      <span className="text-sm">/ Resident Profile</span>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-white p-5 mt-8">
          <ViewImage image={User} />
          <header className="flex justify-end mt-16 mb-8">
            <PrintAndDownload />
            <button
              style={{ backgroundColor: "#FF9500" }}
              className="btn btn-sm text-white"
            >
              Decativate
            </button>
          </header>
          <p className="text-xl font-medium m-0">Bio Data</p>
          <div className="table-responsive mt-8 mb-8">
            <table className="table table-bordered">
              <tbody className="capitalize">
                <tr>
                  <td>Full Name</td>
                  <td>{data[0]["f_name"]}</td>
                </tr>
                <tr>
                  <td>Resident Code</td>
                  <td>{data[0]["id"]}</td>
                </tr>
                <tr>
                  <td>Date Of Birth</td>
                  <td>15 May, 1967</td>
                </tr>
                <tr>
                  <td>Email Address</td>
                  <td>{data[0]["email"]}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{data[0]["phone"]}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{data[0]["gender"]}</td>
                </tr>
                <tr>
                  <td>ID Type</td>
                  <td className="uppercase">{data[0]["id_type"]}</td>
                </tr>
                <tr>
                  <td>ID Number</td>
                  <td>{data[0]["id_number"]}</td>
                </tr>
                <tr>
                  <td className="w-1/2">Status</td>
                  <td className="text-success">{data[0]["status"]}</td>
                </tr>
                <tr>
                  <td className="flex justify-between items-baseline">
                    <span className="flex">
                      {" "}
                      <span className="mr-2"> KYR Status</span>{" "}
                      <KYRSTATUSICON />
                    </span>{" "}
                    <ValidateUserBtn />
                  </td>
                  <td className="text-danger">Not Validated <span className="ml-4"> <Link to={'/residents/validate-resident/1'} style={{color:"#666869"}}>View validation information</Link> </span></td>
                </tr>
                <tr>
                  <td>Product Count</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Date of Onboarding</td>
                  <td>21 May, 2021</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ResidentProfiles/>
        </div>
      )}
    </div>
  );
}

export default ViewResident;
