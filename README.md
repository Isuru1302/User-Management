# User-Management

Simple user management system for a small company to store there details.
 <br /> <br />
Key features: <br />

* Login as super Admin <br />
* View all users table  <br />
* Create user Form <br />
* Update user Form  <br />
* Delete Users  <br />
* User Role Management(agent, team lead, manager) <br />
* Manager - manage all users, assign team leaders <br />
* Team Lead - manage agents <br />

* Managers and Team leaders can only manage users withing their departments. <br />
* Super admins can manage all users inside the system.

**Installation**

## Build Setup (Front-End)<br />

 Download the Project file and extract.<br />
 Before run front-end navigate to **frontend** folder using cmd and, <br />

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Build Setup (Back-End)<br />
navigate to **backend** folder using cmd and, <br />

``` bash
# install migrations 
php artisan migrate

# install seeders(Default Data) 
php artisan db:seed --class=DefaultData

# install seeders(Add new user) 
php artisan db:seed --class=UserSeeder


# Database Name
InsureME


## Default Login
| Name          | User Name         | Password      |
|---------------|-------------------|---------------|
| Super Admin   | super@gmail.com   | 12345         |
| Manager       | manager@gmail.com | 12345         |
| Team Leader   | leader@gmail.com  | 12345         |
| Agent         | agent@gmail.com   | 12345         |
