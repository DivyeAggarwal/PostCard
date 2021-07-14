namespace my.bookshop;
using { Currency, managed, cuid } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity PostCards: cuid, managed{
    UserID : String(10);
    Customer: String(30);
    Assignment: String;
ProjectType: String;
Solution: String;
Industry: String;
StartDate: String;
EndDate: String;
DurationinMonths: String;
Engagement: String;
CountryofProject: String;
AboutProject: String;
MyRole: String;
LearningInsight: String;
DesignmentDocument: String;
BlogLink: String;
KMLink: String;
Views: String;
Likes: String;

}