const express = require('express')
const app = express()
const port = 5894;
var publicDir = require('path').join(__dirname,'/images');
app.use(express.static(publicDir));

app.get('/', index);
app.get('/adminlogin', adminLogin);
app.get('/managerlogin', managerLogin);
app.get('/registration', userRegistration);
app.get('/customerlogin', userLogin);
app.get('/banklogins', banklogins);
app.get('/images', images);
app.get('/admin', admin);
app.get('/manager', manager);
app.get('/user', user);

app.get('/admin/addbank', adminAddBank);
app.get('/admin/viewbanks', adminViewbanks);
app.get('/admin/addmanager', adminAddManager);
app.get('/admin/viewmanager', adminViewmanager);
app.get('/admin/viewcustomer', adminViewcustomer);
app.get('/admin/changePassword', adminchangePassword);

app.get('/manager/profile', managerViewProfile);
app.get('/manager/viewtransaction', managerViewTransaction);
app.get('/manager/viewcustomers', managerViewCustomers);
app.get('/manager/changepassword', managerchangepassword);

app.get('/user/viewProfile', userViewProfile);
app.get('/user/self', userBalance);
app.get('/user/transferamount', userTransferAmount);
app.get('/user/viewtransaction', userTransaction);
app.get('/user/newAccount', userNewAccount);
app.get('/user/existing', userExistingAccount);
app.get('/user/available', userAvailableBalance);
app.get('/user/viewAllAccounts', userviewAllAccounts);
app.get('/user/changeActPassword', userchangeActPassword);




function index(req, res) {
	res.sendFile("./index.html", { root: __dirname });
}

function adminLogin(req, res) {
	res.sendFile("./admin.html", { root: __dirname });
}

function managerLogin(req, res) {
	res.sendFile("./manager.html", { root: __dirname });
}

function userRegistration(req, res) {
	res.sendFile("./registration.html", { root: __dirname });
}

function userLogin(req, res) {
	res.sendFile("./customer.html", { root: __dirname });
}

function banklogins(req, res) {
	res.sendFile("./loginBank.html", { root: __dirname });
}

function images(req, res) {
	res.sendFile("./home.html", { root: __dirname });
}

function admin(req, res) {
	res.sendFile("Admin/home.html", { root: __dirname });
}

function adminAddBank(req, res) {
	res.sendFile("Admin/addBank.html", { root: __dirname });
}

function adminViewbanks(req, res) {
	res.sendFile("Admin/viewBanks.html", { root: __dirname });
}

function adminAddManager(req, res) {
	res.sendFile("Admin/addManager.html", { root: __dirname });
}

function adminViewmanager(req, res) {
	res.sendFile("Admin/viewManager.html", { root: __dirname });
}

function adminViewcustomer(req, res) {
	res.sendFile("Admin/viewCustomer.html", { root: __dirname });
}
function adminchangePassword(req, res) {
	res.sendFile("Admin/changePassword.html", { root: __dirname });
}

function manager(req, res) {
	res.sendFile("Manager/home.html", { root: __dirname });
}

function managerViewProfile(req, res) {
	res.sendFile("Manager/profile.html", { root: __dirname });
}

function managerViewTransaction(req, res) {
	res.sendFile("Manager/viewTransactions.html", { root: __dirname });
}

function managerViewCustomers(req, res) {
	res.sendFile("Manager/viewCustomers.html", { root: __dirname });
}
function managerchangepassword(req, res) {
	res.sendFile("Manager/changePassword.html", { root: __dirname });
}


function user(req, res) {
	res.sendFile("User/home.html", { root: __dirname });
}

function userLoginBank(req, res) {
	res.sendFile("User/loginBank.html", { root: __dirname });
}

function userViewProfile(req, res) {
	res.sendFile("User/profile.html", { root: __dirname });
}

function userBankLogin(req, res) {
	res.sendFile("User/loginBank.html", { root: __dirname });
}

function userLoginBank(req, res) {
	res.sendFile("User/loginBank.html", { root: __dirname });
}

function userBalance(req, res) {
	res.sendFile("User/self.html", { root: __dirname });
}

function userTransferAmount(req, res) {
	res.sendFile("User/transferAmount.html", { root: __dirname });
}

function userMiniStatement(req, res) {
	res.sendFile("User/userMiniStatement.html", { root: __dirname });
}

function userTransaction(req, res) {
	res.sendFile("User/userTransaction.html", { root: __dirname });
}

function userNewAccount(req, res) {
	res.sendFile("User/newAccount.html", { root: __dirname });
}

function userExistingAccount(req, res) {
	res.sendFile("User/existingAccount.html", { root: __dirname });
}

function userAvailableBalance(req, res) {
	res.sendFile("User/myAvailableBalance.html", { root: __dirname });
}


function userviewAllAccounts(req, res) {
	res.sendFile("User/viewAllAccounts.html", { root: __dirname });
}

function userchangeActPassword(req, res) {
	res.sendFile("User/chnageAccountPassword.html", { root: __dirname });
}




app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
