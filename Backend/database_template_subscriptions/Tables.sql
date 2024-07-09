--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Schemas
--    _____                _          _____      _                              
--   / ____|              | |        / ____|    | |                             
--  | |     _ __ ___  __ _| |_ ___  | (___   ___| |__   ___ _ __ ___   __ _ ___ 
--  | |    | '__/ _ \/ _` | __/ _ \  \___ \ / __| '_ \ / _ \ '_ ` _ \ / _` / __|
--  | |____| | |  __/ (_| | ||  __/  ____) | (__| | | |  __/ | | | | | (_| \__ \
--   \_____|_|  \___|\__,_|\__\___| |_____/ \___|_| |_|\___|_| |_| |_|\__,_|___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = N'enum')       EXEC('CREATE SCHEMA [enum]')
IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = N'products')   EXEC('CREATE SCHEMA [products]')
IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = N'invoices')   EXEC('CREATE SCHEMA [invoices]')


/*
Example 1: Elevators / Lifts

Tables: 
- Customers
- Employees
- Elevators / Products
- Expected PMs (Call it jobs/tasks/field work?)
- Invoices
- Bids

Idea: Make an App later

*/


--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Enum Tables
--    _____                _         ______                         _______    _     _           
--   / ____|              | |       |  ____|                       |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___  | |__   _ __  _   _ _ __ ___      | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \ |  __| | '_ \| | | | '_ ` _ \     | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/ | |____| | | | |_| | | | | | |    | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |______|_| |_|\__,_|_| |_| |_|    |_|\__,_|_.__/|_|\___||___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


CREATE TABLE enum.company
(
    ID_auto INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    company_name    VARCHAR(MAX),
)


--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Product Tables
--    _____                _         _____               _            _     _______    _     _           
--   / ____|              | |       |  __ \             | |          | |   |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___  | |__) | __ ___   __| |_   _  ___| |_     | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \ |  ___/ '__/ _ \ / _` | | | |/ __| __|    | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/ | |   | | | (_) | (_| | |_| | (__| |_     | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |_|   |_|  \___/ \__,_|\__,_|\___|\__|    |_|\__,_|_.__/|_|\___||___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
--    _____                _         _____                 _            _______    _     _           
--   / ____|              | |       |_   _|               (_)          |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___    | |  _ ____   _____  _  ___ ___     | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \   | | | '_ \ \ / / _ \| |/ __/ _ \    | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/  _| |_| | | \ V / (_) | | (_|  __/    | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |_____|_| |_|\_/ \___/|_|\___\___|    |_|\__,_|_.__/|_|\___||___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




