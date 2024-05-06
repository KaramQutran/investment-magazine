import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksMedia extends Schema.Component {
  collectionName: 'components_blocks_media';
  info: {
    displayName: 'Media';
    icon: 'picture';
    description: '';
  };
  attributes: {
    photo: Attribute.Media;
  };
}

export interface BlocksRichText extends Schema.Component {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'layout';
  };
  attributes: {
    richText: Attribute.Blocks;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'Slider';
  };
  attributes: {
    Slider: Attribute.Media;
  };
}

export interface BlocksVideoEmbed extends Schema.Component {
  collectionName: 'components_blocks_video_embeds';
  info: {
    displayName: 'Video Embed';
    icon: 'landscape';
  };
  attributes: {
    videoEmbed: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.media': BlocksMedia;
      'blocks.rich-text': BlocksRichText;
      'blocks.slider': BlocksSlider;
      'blocks.video-embed': BlocksVideoEmbed;
    }
  }
}
