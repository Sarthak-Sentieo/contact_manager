import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Column'
import { AgGridReact } from 'ag-grid-react';
import '../CSS/Right_Side.css'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'


export const Right_table = () => {
  

  return (
    
      <div id="myGrid" style={{
        height: '100%',
        width: '100%',
      }} className="ag-theme-alpine ">
        <AgGridReact
          defaultColDef={{
            enableValue: true,
            sortable: true,
            filter: true,
            resizable: true,
            columnHoverHighlight: true,
          }}
          rowData={MOCK_DATA}
          columnDefs={COLUMNS} >


        </AgGridReact>
      </div>
  )
}
export default Right_table

