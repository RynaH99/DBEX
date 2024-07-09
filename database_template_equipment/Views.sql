
DROP VIEW IF EXISTS equipment_view;

CREATE VIEW equipment_view AS
SELECT 
    instance.ID_auto        AS "ID",
    instance.device_name    AS "Name",
    family.family_name      AS "Family",
    company.company_name    AS "Company"
FROM equipment.instance AS instance 
LEFT JOIN enum.company AS company ON company.ID_auto = instance.company_ID
LEFT JOIN equipment.family AS family ON family.ID_auto = instance.family_ID;


-- SELECT * FROM enum.company;
-- SELECT * FROM equipment.family;
-- SELECT 
-- instance.ID_auto        AS "ID",
-- instance.device_name    AS "Name",
-- family.family_name      AS "Family",
-- company.company_name    AS "Company"
-- FROM equipment.instance AS instance 
-- LEFT JOIN enum.company AS company ON company.ID_auto = instance.company_ID
-- LEFT JOIN equipment.family AS family ON family.ID_auto = instance.family_ID;