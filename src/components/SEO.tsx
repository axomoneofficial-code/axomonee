import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'place';
  schema?: Record<string, any>;
  breadcrumbs?: BreadcrumbItem[];
}

const PRODUCTION_ORIGIN = 'https://axomoneofficial-code.github.io/axomonee';
const DEFAULT_IMAGE = `${PRODUCTION_ORIGIN}/images/axom-nav-emblem.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  keywords,
  image,
  type = 'website',
  schema,
  breadcrumbs,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Construct Page Title
    const formattedTitle = title.includes('AXOMONE')
      ? title
      : `${title} | AXOMONE`;
    document.title = formattedTitle;

    // Helper: update or insert a meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Canonical URL
    const targetPath = canonicalPath !== undefined ? canonicalPath : location.pathname;
    const cleanPath = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
    const fullCanonicalUrl = `${PRODUCTION_ORIGIN}${cleanPath === '/' ? '/' : cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 4. OpenGraph & Facebook / WhatsApp Tags
    const fullImageUrl = image
      ? (image.startsWith('http') ? image : `${PRODUCTION_ORIGIN}${image.startsWith('/') ? image : '/' + image}`)
      : DEFAULT_IMAGE;

    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'AXOMONE');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', fullCanonicalUrl);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // 6. JSON-LD Dynamic Schema
    const scriptId = 'axomone-dynamic-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const graphItems: any[] = [];

    // Add breadcrumb schema if breadcrumbs provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      graphItems.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: `${PRODUCTION_ORIGIN}${b.path.startsWith('/') ? b.path : '/' + b.path}`,
        })),
      });
    }

    // Add custom page schema if provided
    if (schema) {
      graphItems.push(schema);
    }

    if (graphItems.length > 0) {
      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graphItems,
      });
    } else if (scriptTag.textContent) {
      scriptTag.textContent = '';
    }
  }, [title, description, canonicalPath, keywords, image, type, schema, breadcrumbs, location.pathname]);

  return null;
};
