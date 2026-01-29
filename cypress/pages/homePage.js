class HomePage
{
    selectorsList()
    {
        const selectors={
            transactionsList:'[data-test="transaction-list"]',
            everyone:'[data-test="nav-public-tab"]',
            friends:'[data-test="nav-contacts-tab"]',
            mine:'[data-test="nav-personal-tab"]',
            newButton:'[data-test="nav-top-new-transaction"]'

        }
        return selectors
    }

    
}
export default HomePage