import React from "react";

const Email = () => {
  return (
    <>
      <div
                    class="loyalty_points_tab_content_box"
                    id="loyalty_points_tab_content"
                  >
                  <div class="email_info_tab_header">
                    <span>Email</span>
                  </div>
                    <div class="email_tab_content_main">
                      <div class="email_tab_content_part_one">
                        <span>Manage Email Settings</span>
                        <div class="email_setting_content_main">
                          <div class="email_setting_content"><span>Email Address:</span><p>User.1@email.com</p></div>
                          <div class="email_setting_content"><span>Status:</span><p class="email_verification_status">Email Verified</p></div>
                        </div>
                        <a>Change my email address</a>
                      </div>
                      <div class="email_tab_content_part_two">
                        <h5>Change Email Address</h5>
                        <p>Email account verification code to:</p>
                        <div class="change_code_email">
                          <span>user.1@email.com</span>
                        </div>
                        <a
                          >I no longer have access to the listed email addresses...</a
                        >
                      </div>
                      <div class="email_tab_content_part_three">
                        <h4>Communication Preferences</h4>
                        <form>
                          <div class="email_tab_content_input_field_main">
                            <div class="email_tab_content_input_field">
                              <span
                              >Send me emails for Tribal Gaming Promotions
                              </span
                            >
                              <input type="radio" />
                            </div>
                            <div class="email_tab_content_input_field">
                              <span
                                >Send me emails when I receive a message
                                </span
                              >
                              <input type="radio" />
                            </div>
                            <div class="email_tab_content_input_field">
                              <div class="email_tab_content_input_field_data">
                              <span
                                >Send me emails for game-specific notifications
                                </span
                              >
                              <small>Determined by games in your library or wishlist. 
                                You can edit these individually in your library.</small>
                              </div>
                              <input type="radio" />

                            </div>
                          </div>
                          {/* <div class="email_tab_content_submit_btn">
                            <button>Send</button>
                          </div> */}
                        </form>
                      </div>
                    </div>
                 
                  </div>
</>
    
);
};

export default Email;