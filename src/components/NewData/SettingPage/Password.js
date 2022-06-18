import React from "react";

const Password = () => {
  return (
    <>

                      <div
                    class="view_order_tab_content_box"
                    id="view_order_tab_content"
                  >
                    <div class="view_order_tab_header">
                      <span>Password</span>
                    </div>
                    <div class="view_order_tab_content">
                      <div class="password_tab_content_main">
                        <div class="password_tab_content_part_one">
                          <span>Your secrets are safe with us!</span>
                          <p>
                            Tribal III Gaming keeps your information including
                            passwords well guarded in our system.
                          </p>
                          <a>Learn more about Tribal III safety practices.</a>
                        </div>
                        <div class="password_tab_content_part_two">
                          <h5>Change My Password</h5>
                          <p>Email account verification code to:</p>
                          <div class="verify_code_email">
                            <span>user.1@email.com</span>
                          </div>
                          <a
                            >I no longer have access to the listed email
                            addresses...</a
                          >
                        </div>
                        <div class="password_tab_content_part_three">
                          <h4>Add New Email</h4>
                          <form>
                            <div class="password_tab_content_input_field_main">
                              <div class="password_tab_content_input_field">
                                <input placeholder="newuser.1@email.com" />
                              </div>
                              <div class="password_tab_content_input_field">
                                <span
                                  >First email associated with your account. If
                                  you can’t remember, give us the earliest email
                                  you can!</span
                                >
                                <input placeholder="" />
                              </div>
                              <div class="password_tab_content_input_field">
                                <span
                                  >Phone number associated with your account.
                                  You may have provided this earlier to help in
                                  times like these!</span
                                >
                                <input placeholder="" />
                              </div>
                            </div>
                            <div class="password_tab_content_submit_btn">
                              <button>Send</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

    </>
    
    );
  };
  
  export default Password;