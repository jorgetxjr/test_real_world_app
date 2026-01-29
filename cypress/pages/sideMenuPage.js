class SideMenuPage
{
    selectorsList()
    {
        const selectors={
            home:'[data-test="sidenav-home"]',
            myAccount:'[data-test="sidenav-user-settings"]',
            bankAccounts:'[data-test="sidenav-bankaccounts"]',
            notifications:'[data-test="sidenav-notifications"]',
            logout:'[data-test="sidenav-singout"]',
            sideMenu:'[data-test="sidenav"]'
        }
        return selectors
    }

    
}
export default SideMenuPage