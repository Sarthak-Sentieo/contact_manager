import React, { useEffect, useMemo, useState, useRef } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import Calender from "./Calender";
import Notes from "./Notes";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";


export const Right_table = () => {
  const ref = useRef();
  const noteref = useRef();
  const [isopen, setisopen] = useState(false);
  const [noteisopen, setnoteisopen] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isopen && ref.current && !ref.current.contains(e.target)) {
        if (counter === 0) {
          setCounter(1);
        } else {
          setCounter(0);
          setisopen(false);
        }
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => document.removeEventListener("click", checkIfClickedOutside);
  }, [isopen, counter]);


  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (noteisopen && noteref.current && !noteref.current.contains(e.target)) {
        if (counter === 0) {
          setCounter(1);
        } else {
          setCounter(0);
          setnoteisopen(false);
        }
      }
    };

    document.addEventListener("click", checkIfClickedOutside);
    return () => document.removeEventListener("click", checkIfClickedOutside);
  }, [noteisopen, counter]);

  const Column = [
    {
      headerName: "Name",
      field: "Name",
      width: 170,
    },
    {
      headerName: "Email",
      field: "email",
      width: 210,
    },
    {
      headerName: "Phone Number",
      field: "phone_number",
      width: 150,
    },
    {
      headerName: "Company",
      field: "company_name",
      width: 200,
    },
    {
      headerName: "Job Title",
      field: "job_title",
      width: 150,
    },
    {
      headerName: "Directory",
      field: "directory",
      width: 130,
    },

    {
      headerName: "",
      field: "Name",
      width: 90,
      filter: null,
      sortable: false,
      cellRendererFramework: (params) => (
        <div className="connect">
          <span onClick={() => setisopen((oldState) => !oldState)}>
            <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Calender
          </span>
        </div>
      ),
    },

    {
      headerName: "",
      field: "Name",
      width: 110,
      filter: null,
      sortable: false,
      cellRendererFramework: (params) => (
        <div className="connect">
          <span onClick={() => setnoteisopen((oldState) => !oldState)}>
            <i className="far fa-clipboard"></i>&nbsp;&nbsp;&nbsp;Notes
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="frame2">
      {/* // <div className='main' onClick={back?off:null}> */}
      <div
        id="myGrid"
        style={{
          height: "100%",
          width: "100%",
        }}
        className="ag-theme-alpine "
      >
        <AgGridReact
          defaultColDef={{
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
            columnHoverHighlight: true,
          }}
          rowData={MOCK_DATA}
          columnDefs={Column}
        ></AgGridReact>
      </div>

      {isopen && <Calender calenderRef={ref}></Calender>}
      {noteisopen && <Notes notesRef={noteref}></Notes>}


    </div>
  );
};
export default Right_table;
