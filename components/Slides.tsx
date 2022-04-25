import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { useRef } from 'react';
import Image from 'next/image';

const xOffset = 100;
const variants = {
  enter: (direction: any) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction: any) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

export default function Slides({
  currentPage,
  setPage,
  direction,
  pages,
  model,
}: any) {
  const hasPaginated = useRef(false);

  const detectPaginationGesture = (e: any, { offset }: any) => {
    // console.log({ e, offset });

    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If we're dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (offset.x > threshold) {
      // If we're dragging right, go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      // Wrap the page index to within the permitted page range
      newPage = wrap(0, pages.length, newPage);
      setPage(newPage, offset.x < 0 ? 1 : -1);
    }
  };

  function tap(event: any, info: any) {
    // console.log('event :>> ', event.view.screen.width);
    // console.log('info :>> ', info.point.x);
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = event.view.screen.width / 2;

    if (info.point.x > threshold) {
      // If we're dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (info.point.x < threshold) {
      // If we're dragging right, go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      // hasPaginated.current = true;
      newPage = wrap(0, pages.length, newPage);
      setPage(newPage, info.point.x < 0 ? 1 : -1);
    }
  }

  return (
    <div className="slider-container -top-10 sm:top-0">
      <AnimatePresence
        // Disable entry animations when AnimatePresence mounts, but allow
        // them when new children enter.
        initial={false}
        // This will be used for components to resolve exit variants. It's neccessary
        // as removed components won't rerender with the latest state (as they've been removed)
        custom={direction}
      >
        <motion.div
          // Changing the key of the component remounts it - we are creating a new slide
          // per page. This is why we see multiple slides at once despite only rendering
          // one component at a time.
          key={currentPage}
          className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(
              ${model.largeUrl}
            )`,
            backgroundPosition: 'center',
          }}
          data-page={currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          layout
          onTap={tap}
          // drag="x"
          // onDrag={detectPaginationGesture}
          // onDragStart={() => (hasPaginated.current = false)}
          // onDragEnd={() => (hasPaginated.current = true)}
          // Snap the component back to the center if it hasn't paginated
          // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all other variants, in
          // this case initial and animate.
          custom={direction}
        >
          {/* {model.largeUrl && <Image src={model.largeUrl} layout="fill" />} */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
