import React from 'react'

function PropertyDetail() {
  return (
    <>
      <div className="table__column__2 css-column-2">
        <div className="table__title css-row" style={{ marginBottom: "16px" }}>
          <div className="column2 css-col">
            <div className="text2 css-text-2">
              <h2>Property Detail</h2>
            </div>
          </div>
        </div>
        <div className="table__title css-row">
          <div className="detail__column css-col">
          <div
              className="box__detail css-bx-dtl"
              style={{ marginBottom: "30px" }}
            >
              <div className="box__detail__section header clearfix css-section">
                <span>Property Detail</span>
              </div>
              <div className="box__detail__section clearfix css-section">
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Main Currency</span>
                    </label>
                  </div>
                  <div className="box-column css-col">
                    <span>Australian Dollar (AUD)</span>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
