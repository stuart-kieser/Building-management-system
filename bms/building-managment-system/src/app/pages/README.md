Page folder is meant for app pages to hold components to route to.
-example:

    # Managment systems 
    room-management(addRoom, removeRoom, roomStatus, editRoom)
    tenant-management(addTenant, removeTenant, editTenant)
    maintenance-management(maintenanceList, editList)
    carbon-management(services(water + elec), waste(rubbish), temperatures)

    tenant-login(editSelf, meta-data(payment-status, price))
        tenant-sign-up(form submission, tenantComponent)

    admin-login(editTenants, access to managemntSystems)
        admin-sign-up(employeeComponent, permissions)