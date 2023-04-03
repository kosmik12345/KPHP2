$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature file",
  "description": "",
  "id": "login-feature-file",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters email id \"prashanthi.skvl@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"Test@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_in_login_page()"
});
formatter.result({
  "duration": 9333553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanthi.skvl@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitions.user_enters_email_id(String)"
});
formatter.result({
  "duration": 165233600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitions.user_enters_password(String)"
});
formatter.result({
  "duration": 119606200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 4132699500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 1258373900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to logout from the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-logout-from-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@logout"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User clicks the profile button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks the signout button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be logged out successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_the_profile_button()"
});
formatter.result({
  "duration": 3111383400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_the_signout_button()"
});
formatter.result({
  "duration": 98701800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_be_logged_out_successfully()"
});
formatter.result({
  "duration": 651045500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "login-feature-file;user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@invalidlogin"
    },
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#Given User is in login page"
    }
  ],
  "line": 28,
  "name": "User enters email id \"test345678123@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User enters password \"test@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see error message on the screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test345678123@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitions.user_enters_email_id(String)"
});
formatter.result({
  "duration": 89775000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinitions.user_enters_password(String)"
});
formatter.result({
  "duration": 75791400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 556018900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_error_message_on_the_screen()"
});
formatter.result({
  "duration": 37831100,
  "status": "passed"
});
});