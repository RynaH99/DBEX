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
IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = N'equipment')  EXEC('CREATE SCHEMA [equipment]')
-- IF NOT EXISTS(SELECT * FROM sys.schemas WHERE NAME = N'products')   EXEC('CREATE SCHEMA [products]')
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


CREATE TABLE IF NOT EXISTS enum.company (
    ID_auto         SERIAL PRIMARY KEY,
    company_name    TEXT,
    company_address TEXT --TODO: consider changing this to a more fitted data type and proper addressing. 
)


--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Equipment Tables
--    _____                _         ______            _                            _     _______    _     _           
--   / ____|              | |       |  ____|          (_)                          | |   |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___  | |__   __ _ _   _ _ _ __  _ __ ___   ___ _ __ | |_     | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \ |  __| / _` | | | | | '_ \| '_ ` _ \ / _ \ '_ \| __|    | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/ | |___| (_| | |_| | | |_) | | | | | |  __/ | | | |_     | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |______\__, |\__,_|_| .__/|_| |_| |_|\___|_| |_|\__|    |_|\__,_|_.__/|_|\___||___/
--                                            | |       | |                                                            
--                                            |_|       |_|                                                            
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CREATE TABLE IF NOT EXISTS equipment.family (
    ID_auto     SERIAL PRIMARY KEY,
    family_name TEXT,
    parts_used  TEXT
);


CREATE TABLE IF NOT EXISTS equipment.instance (
    ID_auto     SERIAL PRIMARY KEY,
    device_name TEXT,
    family_ID   INTEGER,
    company_ID  INTEGER,
    CONSTRAINT equipment_instance_family_ID  FOREIGN KEY (family_ID) REFERENCES equipment.family(ID_auto),
    CONSTRAINT equipment_instance_company_ID FOREIGN KEY (company_ID) REFERENCES enum.company(ID_auto)
);

--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Invoice Tables
--    _____                _         _____                 _            _______    _     _           
--   / ____|              | |       |_   _|               (_)          |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___    | |  _ ____   _____  _  ___ ___     | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \   | | | '_ \ \ / / _ \| |/ __/ _ \    | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/  _| |_| | | \ V / (_) | | (_|  __/    | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |_____|_| |_|\_/ \___/|_|\___\___|    |_|\__,_|_.__/|_|\___||___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





