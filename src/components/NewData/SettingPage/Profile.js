import React from "react";

const Profile = () => {
  return (
    <>
     <div
                    class="personal_info_tab_content_box"
                    id="personal_info_tab_content"
                  >
                    <div class="personal_info_tab_header">
                      <span>Profile</span>
                    </div>
                    <div class="personal_info_tab_content">
                      <form>
                        <div class="personal_info_tab_content_list">
                          <div class="personal_info_tab_fields_list">
                            <div class="single_personal_info_tab_field">
                              <label for="First name">Username</label>
                              <div class="single_personal_info_tab_input_field">
                                <input type="text" placeholder="" />
                              </div>
                            </div>
                            <div class="single_personal_info_inner_tab_field">
                              <div class="single_personal_info_tab_field">
                                <label for="First name">Location</label>
                                <div
                                  class="single_personal_info_tab_input_field"
                                >
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                              <div class="single_personal_info_tab_field">
                                <label for="First name">Age</label>
                                <div
                                  class="single_personal_info_tab_input_field"
                                >
                                  <input type="text" placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div class="single_personal_info_tab_field">
                              <label for="First name">Bio</label>
                              <div
                                class="single_personal_info_tab_input_field single_personal_info_textarea_field"
                              >
                                <textarea cols="20" rows="15"></textarea>
                              </div>
                            </div>
                          </div>

                          <div class="personal_info_tab_content_edit_btn">
                            <button>Save</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
    </>
    
    );
  };
  
  export default Profile;