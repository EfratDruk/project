enum StatusAdjustment {
    new = 'חדש',
    processes = 'בטיפול',
    null = 'null',
}
enum Type{
    man='MAN',
    woman='WOMAN',
    matchmaker='MATCHMAKER'
}

enum StatusMan {
    yeshiva = 'בן_ישיבה',
    avrech='אברך',
    student = 'לומד_מקצוע',
    work = 'עובד',
    combines='משלב',     
}

enum Beard{
   yes= 'מזוקן',
   no='מגולח',
   sometimes='קצוץ',
}
enum Smoking{
    yes='YES',
    no='NO',
    sometimes='SOMETIMES'
}

enum Studies{
    yeshiva= 'ישיבה',
    sem='סמינר',
    boys='חיידר',
    girls='בית_יעקב',
highSchool='תיכון',
college='מכללה',
university= 'אוניברסיטה',
}

enum Cover{
   wig='פאה' ,
   kerchief='מטפחת',
   flex='גמיש',
   partial='חלקי',
   non='ללא_כיסוי',
 }

 enum Gender{
    male= 'MALE', 
    female='FEMALE'
}
enum License {
    yes='YES',
    no='NO',
    NIIS='Not_interested_in_specifying',
}
enum Status {
    single='SINGLE',
    WWK='WIDOW_WITH_KIDS' ,
    WNK='WIODW_NO_KIDS',
    DNK='DIVORCEE_NO_KIDS' ,
    DWK='DIVORCEE_WITH_KIDS',
    married='MARRIED'
}
enum Residence
{ WP='WITH_PARENTS',
    //  ALONE, SINGLES, DORMITORY, BATCHELOR_APARTMENT
     }
enum Sector 
{
    chasidish='חסידי',
    //  ליטאי, ספרדי, תימני,חבד, חצי_חצי, אחר
    }
enum Language {
    english='ENGLISH', 
    // HEBREW, FRENCH, SPANISH, GERMAN
}
enum Type_phon
{
    kosher='כשר',
    // ,תומך_כשר,מכשיר_מוגן,סמארטפון,שני_טלפונים
}
enum Land
{israel='ישראל',
    // ,אנגליה,רוסיה,צרפת,מרוקו,בלגיה,תימן
}
enum City{
jerusalem='ירושלים',
    //  תל_אביב,חיפה,בני_ברק,רמת_גן,פתח_תקוה,אשדוד,ביתר
    }

    export { StatusAdjustment, StatusMan,Beard,Smoking,Studies,Cover, License,Gender, Status, Residence, Sector,Language,Type_phon, Land, City }




