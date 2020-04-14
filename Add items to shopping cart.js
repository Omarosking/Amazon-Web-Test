
web.init();
web.open('https://www.amazon.com/');
web.selectWindow('title=Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
//               id: id=twotabsearchtextbox
//             name: name=field-keywords
// xpath:attributes: //input[@id=\'twotabsearchtextbox\']
// xpath:idRelative: //div[@id=\'nav-search\']/form/div[3]/div[1]/input
//   xpath:position: //div[3]/div[1]/input
//              css: css=#twotabsearchtextbox
web.click('id=twotabsearchtextbox');
//               id: id=twotabsearchtextbox
//             name: name=field-keywords
// xpath:attributes: //input[@id=\'twotabsearchtextbox\']
// xpath:idRelative: //div[@id=\'nav-search\']/form/div[3]/div[1]/input
//   xpath:position: //div[3]/div[1]/input
//              css: css=#twotabsearchtextbox
web.type('id=twotabsearchtextbox', 'xbox');
// xpath:attributes: //input[@value=\'Go\']
// xpath:idRelative: //div[@id=\'nav-search\']/form/div[2]/div/input
//   xpath:position: //div[2]/div/input
//              css: css=#nav-search > form > div.nav-right > div > input
web.click('//input[@value=\'Go\']');
web.selectWindow('title=Amazon.com: xbox');
// xpath:idRelative: //div[@id=\'search\']/div[1]/div[1]/div/span[4]/div[1]/div[1]/div/span/div/div/div[2]/div[2]/div/div[1]/div/div/div[1]/h2/a/span
//   xpath:position: //div[1]/div/span/div/div/div[2]/div[2]/div/div[1]/div/div/div[1]/h2/a/span
//              css: css=#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-28-of-32.sg-col-16-of-20.sg-col.sg-col-32-of-36.sg-col-8-of-12.sg-col-12-of-16.sg-col-24-of-28 > div > span:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > span > div > div > div:nth-child(2) > div.sg-col-4-of-12.sg-col-8-of-16.sg-col-16-of-24.sg-col-12-of-20.sg-col-24-of-32.sg-col.sg-col-28-of-36.sg-col-20-of-28 > div > div:nth-child(1) > div > div > div:nth-child(1) > h2 > a > span


web.selectWindow('title=Amazon.com: xbox');
//        xpath:img: //img[@alt=\'Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming)\']
// xpath:idRelative: //div[@id=\'search\']/div[1]/div[1]/div/span[4]/div[1]/div[1]/div/span/div/div/div[2]/div[1]/div/div/span/a/div/img
//   xpath:position: //div[1]/div/span/div/div/div[2]/div[1]/div/div/span/a/div/img
//              css: css=#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-28-of-32.sg-col-16-of-20.sg-col.sg-col-32-of-36.sg-col-8-of-12.sg-col-12-of-16.sg-col-24-of-28 > div > span:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > span > div > div > div:nth-child(2) > div.sg-col-4-of-24.sg-col-4-of-12.sg-col-4-of-36.sg-col-4-of-28.sg-col-4-of-16.sg-col.sg-col-4-of-20.sg-col-4-of-32 > div > div > span > a > div > img
web.click('//img[@alt=\'Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming)\']');
web.selectWindow('title=Amazon.com: Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming): Electronics');
//               id: id=add-to-cart-button
//             name: name=submit.add-to-cart
// xpath:attributes: //input[@id=\'add-to-cart-button\']
// xpath:idRelative: //span[@id=\'submit.add-to-cart\']/span/input
//   xpath:position: //div[12]/div[1]/span/span/span/input
//              css: css=#add-to-cart-button

// xpath:idRelative: //button[@id=\'a-autoid-16-announce\']/div/div[1]/span
//   xpath:position: //li[5]/span/div/span/span/span/button/div/div[1]/span
//              css: css=#a-autoid-16-announce > div > div.twisterTextDiv.text > span
web.click('//button[@id=\'a-autoid-16-announce\']/div/div[1]/span');
//               id: id=add-to-cart-button
//             name: name=submit.add-to-cart
// xpath:attributes: //input[@id=\'add-to-cart-button\']
// xpath:idRelative: //span[@id=\'submit.add-to-cart\']/span/input
//   xpath:position: //div[12]/div[1]/span/span/span/input
//              css: css=#add-to-cart-button
web.click('id=add-to-cart-button');
//               id: id=attach-close_sideSheet-link
// xpath:attributes: //a[@id=\'attach-close_sideSheet-link\']
// xpath:idRelative: //div[@id=\'attach-accessory-pane\']/div/div[1]/a
//       xpath:href: (//a[contains(@href, \'#\')])[1]
//   xpath:position: //div[9]/div[5]/div[1]/div[1]/div/div[1]/div/div/div[1]/a
//              css: css=#attach-close_sideSheet-link

