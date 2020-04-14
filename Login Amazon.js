web.init();
web.open('https://www.amazon.com/');
web.selectWindow('title=Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
// xpath:idRelative: //div[@id=\'nav-signin-tooltip\']/a/span
//   xpath:position: //div[7]/div[2]/a/span
//              css: css=#nav-signin-tooltip > a > span
web.click('//div[@id=\'nav-signin-tooltip\']/a/span');
web.selectWindow('title=Amazon Sign-In');
//               id: id=ap_email
//             name: name=email
// xpath:attributes: //input[@id=\'ap_email\']
// xpath:idRelative: //div[@id=\'authportal-main-section\']/div[2]/div/div[1]/form/div/div/div/div[1]/input[1]
//   xpath:position: //div/div/div/div[1]/input[1]
//              css: css=#ap_email
//               id: id=ap_email
//             name: name=email
// xpath:attributes: //input[@id=\'ap_email\']
// xpath:idRelative: //div[@id=\'authportal-main-section\']/div[2]/div/div[1]/form/div/div/div/div[1]/input[1]
//   xpath:position: //div/div/div/div[1]/input[1]
//              css: css=#ap_email
web.type('id=ap_email', 'test@amazon.com');
// xpath:attributes: //input[@id=\'continue\']
// xpath:idRelative: //span[@id=\'continue\']/span/input
//   xpath:position: //span/input
web.click('//input[@id=\'continue\']');
web.selectWindow('title=Amazon Sign-In');
//               id: id=ap_password
//             name: name=password
// xpath:attributes: //input[@id=\'ap_password\']
// xpath:idRelative: //div[@id=\'authportal-main-section\']/div[2]/div/div/div/form/div/div[1]/input
//   xpath:position: //div/div[1]/input
//              css: css=#ap_password
web.type('id=ap_password', 'test');
//               id: id=signInSubmit
// xpath:attributes: //input[@id=\'signInSubmit\']
// xpath:idRelative: //span[@id=\'auth-signin-button\']/span/input
//   xpath:position: //span/input
//              css: css=#signInSubmit
web.click('id=signInSubmit');
