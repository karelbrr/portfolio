import { ImageResponse } from 'next/og';

export const contentType = 'image/png';

export function generateImageMetadata() {
  return [
    { id: '48', size: { width: 48, height: 48 }, alt: 'Icon 48x48' },
    { id: '96', size: { width: 96, height: 96 }, alt: 'Icon 96x96' },
    { id: '144', size: { width: 144, height: 144 }, alt: 'Icon 144x144' },
    { id: '192', size: { width: 192, height: 192 }, alt: 'Icon 192x192' },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = parseInt(id) || 48;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="24" fill="#0000FF" />
        </svg>
      </div>
    ),
    { width: size, height: size }
  );
}
