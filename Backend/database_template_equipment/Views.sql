


DROP VIEW IF EXISTS views.enum_company_base;
CREATE VIEW views.enum_company_base AS 
SELECT 
    *
FROM enum.company;


DROP VIEW IF EXISTS views.equipment_instance_base;
CREATE VIEW views.equipment_instance_base AS
SELECT 
    instance.ID_auto        AS "ID",
    instance.device_name    AS "Name",
    family.family_name      AS "Family",
    company.company_name    AS "Company"
FROM equipment.instance     AS instance 
LEFT JOIN enum.company      AS company  ON company.ID_auto  = instance.company_ID
LEFT JOIN equipment.family  AS family   ON family.ID_auto   = instance.family_ID;


DROP VIEW IF EXISTS views.equipment_family_base;
CREATE VIEW views.equipment_family_base AS 
SELECT 
    family.
FROM equipment.family AS family;
