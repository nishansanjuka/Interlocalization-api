export interface ContentQuery {
    lang?: 'en' | 'fr';
}


export interface PageContent {
    title: string;
    description?: string;
    registrationLink?: string;
    username?: string;
    email?: string;
    gender?: string;
    male?: string;
    female?: string;
    other?: string;
    civilStatus?: string;
    single?: string;
    married?: string;
    divorced?: string;
    registerButton?: string;
}
  
export interface Dictionary {
    landingPage: PageContent;
    registrationPage: PageContent;
}
  