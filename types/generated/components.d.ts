import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBadge extends Struct.ComponentSchema {
  collectionName: 'components_blocks_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksExCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ex_cards';
  info: {
    displayName: 'ExCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    jobtitle: Schema.Attribute.String;
    period: Schema.Attribute.String;
  };
}

export interface BlocksExperience extends Struct.ComponentSchema {
  collectionName: 'components_blocks_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.ex-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksImageLayout extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_layouts';
  info: {
    displayName: 'imageLayout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksReview extends Struct.ComponentSchema {
  collectionName: 'components_blocks_reviews';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

export interface BlocksService extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsAbout extends Struct.ComponentSchema {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    about: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    experience: Schema.Attribute.Component<'blocks.experience', true>;
    pfp: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsClients extends Struct.ComponentSchema {
  collectionName: 'components_components_clients';
  info: {
    description: '';
    displayName: 'Clients';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.review', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    available: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'blocks.cta', false>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    badge: Schema.Attribute.Component<'blocks.badge', true>;
    clientLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cta: Schema.Attribute.Component<'blocks.cta', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsNavbar extends Struct.ComponentSchema {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    link: Schema.Attribute.Component<'blocks.link', true>;
  };
}

export interface ComponentsServices extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    service: Schema.Attribute.Component<'blocks.service', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsVideographySlug extends Struct.ComponentSchema {
  collectionName: 'components_components_videography_slugs';
  info: {
    description: '';
    displayName: 'VideographySlug';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos' | 'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.badge': BlocksBadge;
      'blocks.cta': BlocksCta;
      'blocks.ex-card': BlocksExCard;
      'blocks.experience': BlocksExperience;
      'blocks.image-layout': BlocksImageLayout;
      'blocks.link': BlocksLink;
      'blocks.review': BlocksReview;
      'blocks.service': BlocksService;
      'components.about': ComponentsAbout;
      'components.clients': ComponentsClients;
      'components.footer': ComponentsFooter;
      'components.hero': ComponentsHero;
      'components.navbar': ComponentsNavbar;
      'components.services': ComponentsServices;
      'components.videography-slug': ComponentsVideographySlug;
    }
  }
}
