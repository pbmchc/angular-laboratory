import { Route } from '../../shared/models/route.model';

export const ROUTES_TITLES = {
    POSTS: $localize `:@@routes.posts:Posts`,
    AUTHORS: $localize `:@@routes.authors:Authors`,
    TOPICS: $localize `:@@routes.topics:Topics`
};

export const ROUTES: Route[] = [
    { key: 'posts', title: ROUTES_TITLES.POSTS },
    { key: 'authors', title: ROUTES_TITLES.AUTHORS },
    { key: 'topics', title: ROUTES_TITLES.TOPICS }
];
