import React, { useRef, useContext } from 'react'
import ReactToPrint from "react-to-print";
import ComponentToPrint from './ComponentToPrint';
import { userContext } from '../../App';

const Report = () => {
    const { userState, userDispatch } = useContext(userContext)
    let componentRef = useRef();
    const pageStyle = `
  @page {
    size: 80mm 50mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;
    return (
        <div >
            <div >
                {/* button to trigger printing of target component */}
                <div className='p-5 d-flex  justify-content-right'>
                    <ReactToPrint

                        trigger={() => <button className="btn btn-info">Print Report </button>}
                        content={() => componentRef}
                        // pageStyle={pageStyle}
                        documentTitle='Report'
                    />
                </div>
                {/* component to be printed */}
                <ComponentToPrint className='p-5 d-flex  justify-content-center'  ref={(el) => (componentRef = el)} />
            </div>
        </div>
    )
}

export default Report