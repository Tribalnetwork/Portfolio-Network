import React from "react";

const Billing = () => {
  return (
    <>
                 <div
                    class="personal_info_tab_content_box"
                    id="billing_tab_content"
                     >
                    <div class="personal_info_tab_header">
                      <span>Billing</span>
                    </div>

                     <div class="billing_detail_section">
                        <p>Your purchases and subscriptions will be billed to the payment methods below</p>

                        <div class="billing_detail_section_box">
                          <h6>Default</h6>
                          <div class="billing_detail_section_box_main">
                            <div class="billing_detail_section_box_card_detail">
                            <div class="billing_detail_section_box_data"><span>Card #</span><small>**** 4198</small></div>
                            <div class="billing_detail_section_box_data"><span>Expiration</span><small>01/2022</small></div>
                            </div>
                            <div class="billing_address_box">
                              <span>Billing Address</span>
                              <small>1424 Ball Rd...</small>
                            </div>
                          </div>
                          <div class="billing_edit_payment_method"><a>Edit Payment Method</a></div>
                        </div>
                       </div>  

                       <div class="billing_transaction_history">
                         <h5>Transaction History</h5>
                         <p>Select transaction below to get help.</p>
                         <div class="view_order_tab_content">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" >Date</th>
                        <th scope="col" >Items</th>
                        <th scope="col" >Type</th>
                        <th scope="col" >Total</th>
                        <th scope="col" >Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>7/14/21</td>
                        <td >Red Dead Red...</td>
                        <td >PC Game</td>
                        <td>35.00 USD</td>
                        <td>
                        Visa 4198
                        </td>
                      </tr>
                      <tr>
                        <td>7/14/21</td>
                        <td >Red Dead Red...</td>
                        <td >PC Game</td>
                        <td>35.00 USD</td>
                        <td>
                        Visa 4198
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
                       </div>
                     

                  </div>
</>
    
);
};

export default Billing;