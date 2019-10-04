Feature: Github

  # Scenario: Search with exisiting repo
  #   Given Navigate to github page
  #   And Enter "buenoAPI" in the search bar
  #   And Press enter
  #   Then User navigates to existing repos "buenoAPI"

  # Scenario: Search with an unexisiting repo
  #   Given Navigate to github page
  #   And Enter "thisrepodoesnotexistsimprettysure" in the search bar
  #   And Press enter
  #   Then User cannot find repo "thisrepodoesnotexistsimprettysure"


  Scenario Outline: Search with multiple repo names
    Given Navigate to github page
    And Enter <RepoName> in the search bar
    And Press enter
    Then <RepoName> <isExisting> or not
      Examples:
        | RepoName                          | isExisting |
        | buenoAPI                          | true       |
        | thisrepodoesnotexistsimprettysure | false      |