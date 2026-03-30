'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

import VideoImage from './_images/video.jpg';
import { Modal } from '@/components/modal';
import { Overlay } from '@/components/overlay';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  src: string;
}

export const Video: FC<Props> = ({ src }) => {
  const [ isOpen, handleToggle ] = useToggle();

  return (
    <>
      <button type="button" onClick={handleToggle} className="rounded-5 overflow-hidden position-relative p-0 border-0 bg-transparent d-block w-100" aria-label="Play masterclass video" style={{ outline: 'none', boxShadow: 'none' }}>
        <Image src={VideoImage} alt="" className="img-fluid" />
        <Overlay backgroundColor="rgba(0,0,0,0.4)" />
        <FaPlayCircle size={80} className="position-absolute top-50 start-50 translate-middle text-white" />
      </button>
      <Modal open={isOpen} onClose={handleToggle}>
        <div className="ratio ratio-16x9 rounded-4 overflow-hidden bg-black">
          <video src={src} controls autoPlay className="w-100 h-100" />
        </div>
      </Modal>
    </>
  );
};
