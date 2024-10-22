export interface InitialStateProps {
    loading: boolean;
    subscribeLoading: boolean;
    about: aboutDataKey | null;
    footer: footerDataKeys | null;
    currentNews: newsDataKeys | null;
    carousels: carouselDataKey[] | [];
    projects: projectsDataKey[] | [];
    contacts: contactCardDataProps | null;
    partners: partnersDataKeys[] | [];
    news: newsDataKeys[] | []
    currentPage: number;
    pageCount: number;
    limit: number;
    totalCount: number;
}

export interface carouselDataKey {
    image: string;
    link: string;
}

export interface aboutDataKey extends carouselDataKey{
    text: string;
}

export interface contactCardDataProps {
   boss: contactDataKey,
    workers: contactDataKey[]
}

export interface contactDataKey {
    image: string;
    name: string;
    profession: string;
    text?: string;
}

export interface partnersDataKeys {
    icon: string;
}

export interface footerDataKeys {
    video: string;
    telegram_link: string;
    instagram_link: string;
    facebook_link: string;
    phone_number: string;
    address: string;
    address_link: string;
}

export interface projectsDataKey extends defaultKeys {
    icon: string;
    image: string;
    link: string;
    image_mobile: string;
}

export interface newsDataKeys extends defaultKeys {
    image: string;
    title: string;
    description: string;
    video?: string;
}

export interface defaultKeys {
    id: number;
    // created_at: string; // Assuming the timestamp is stored in ISO format
    // updated_at: string; // Assuming the timestamp is stored in ISO format
}