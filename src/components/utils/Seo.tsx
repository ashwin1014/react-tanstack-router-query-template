import { type ReactNode } from 'react';

import { Helmet } from 'react-helmet-async';

interface SeoProps {
  children?: ReactNode;
  description?: string;
  title: string;
}

/**
 * Adds title to browser tab amongst other Seo tags
 *
 * @see [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
 */
const Seo = ({ title, description, children }: SeoProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta property='og:title' name='og:title' content={title} />
      {description ? (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' name='og:description' content={description} />
        </>
      ) : null}
      {children ?? null}
    </Helmet>
  );
};

export default Seo;
