Feature: Website Navigation

  Scenario Outline: Verify primary navigation items
    Given I am on the homepage in "<viewType>" view
    When I open the navigation menu
    Then the primary navigation should contain the following items:
      | Products   |
      | Solutions  |
      | Pricing    |
      | Why Telnyx |
      | Resources  |
      | Developers |

    Examples:
      | viewType |
      | Desktop  |
      | Mobile   |

  Scenario Outline: Verify secondary navigation items
    Given I am on the homepage in "<viewType>" view
    When I open the navigation menu
    Then the secondary navigation should contain:
      | text       | link                      |
      | SETI       | https://seti.telnyx.com   |
      | Shop       | https://shop.telnyx.com   |
      | Contact us | /contact-us               |
      | Log in     | https://portal.telnyx.com |

    Examples:
      | viewType |
      | Desktop  |
      | Mobile   |