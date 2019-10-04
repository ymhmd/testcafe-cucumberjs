Feature: Github Login

    Scenario Outline: Login with multiple users
        Given Navigate to github login page
        And Enter <username> as user username and <password> as user password
        And Click on login button
        Then <isLogged> or not
        Examples:
            | username                  | password  | isLogged |
            | invalid                   | XXXX      | false    |
            | sebastian.vera@cision.com | YYYYYYYYY | true     |