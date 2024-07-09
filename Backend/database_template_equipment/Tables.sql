--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Schemas
--    _____                _          _____      _                              
--   / ____|              | |        / ____|    | |                             
--  | |     _ __ ___  __ _| |_ ___  | (___   ___| |__   ___ _ __ ___   __ _ ___ 
--  | |    | '__/ _ \/ _` | __/ _ \  \___ \ / __| '_ \ / _ \ '_ ` _ \ / _` / __|
--  | |____| | |  __/ (_| | ||  __/  ____) | (__| | | |  __/ | | | | | (_| \__ \
--   \_____|_|  \___|\__,_|\__\___| |_____/ \___|_| |_|\___|_| |_| |_|\__,_|___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


-- TODO: Come back and optimize / improve this chunk.
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'enum') THEN
        EXECUTE 'CREATE SCHEMA enum';
    END IF;
END $$;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'views') THEN -- 'view' is a reserved word, 'views' is not. 
        EXECUTE 'CREATE SCHEMA views';
    END IF;
END $$;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'equipment') THEN
        EXECUTE 'CREATE SCHEMA equipment';
    END IF;
END $$;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'invoices') THEN
        EXECUTE 'CREATE SCHEMA invoices';
    END IF;
END $$;


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
    -- Primary Key
    ID_auto         SERIAL PRIMARY KEY,

    -- Data Columns
    company_name    TEXT,
    company_address TEXT --TODO: consider changing this to a more fitted data type and proper addressing. 
);
COMMENT ON COLUMN enum.company.ID_auto          IS 'PK';
COMMENT ON COLUMN enum.company.company_name     IS 'Name of the Company.';
COMMENT ON COLUMN enum.company.company_address  IS 'Address of the Company.';


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
    -- Primary Key
    ID_auto     SERIAL PRIMARY KEY,

    -- Data Columns
    family_name TEXT,
    parts_used  TEXT
);
COMMENT ON COLUMN equipment.family.ID_auto      IS 'PK';
COMMENT ON COLUMN equipment.family.family_name  IS 'Group Name of the Equipment Family.';
COMMENT ON COLUMN equipment.family.parts_used   IS 'All parts used within this family group.';


CREATE TABLE IF NOT EXISTS equipment.instance (
    -- Primary Key
    ID_auto     SERIAL PRIMARY KEY,
    
    -- Foreign Keys
    family_ID   INTEGER,
    company_ID  INTEGER,

    -- Data Columns
    device_name TEXT,

    -- Constraints
    CONSTRAINT equipment_instance_family_ID  FOREIGN KEY (family_ID) REFERENCES equipment.family(ID_auto),
    CONSTRAINT equipment_instance_company_ID FOREIGN KEY (company_ID) REFERENCES enum.company(ID_auto)
);
COMMENT ON COLUMN equipment.instance.ID_auto        IS 'PK';
COMMENT ON COLUMN equipment.instance.family_ID      IS 'FK to equipment.family';
COMMENT ON COLUMN equipment.instance.company_ID     IS 'FK to enum.company';
COMMENT ON COLUMN equipment.instance.device_name    IS 'Name of the individual device';


--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Create Invoice Tables
--    _____                _         _____                 _            _______    _     _           
--   / ____|              | |       |_   _|               (_)          |__   __|  | |   | |          
--  | |     _ __ ___  __ _| |_ ___    | |  _ ____   _____  _  ___ ___     | | __ _| |__ | | ___  ___ 
--  | |    | '__/ _ \/ _` | __/ _ \   | | | '_ \ \ / / _ \| |/ __/ _ \    | |/ _` | '_ \| |/ _ \/ __|
--  | |____| | |  __/ (_| | ||  __/  _| |_| | | \ V / (_) | | (_|  __/    | | (_| | |_) | |  __/\__ \
--   \_____|_|  \___|\__,_|\__\___| |_____|_| |_|\_/ \___/|_|\___\___|    |_|\__,_|_.__/|_|\___||___/
--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





