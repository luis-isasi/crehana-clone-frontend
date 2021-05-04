import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';

// flex items-center px-4 pt-4 box-border text-gray-300 md:text-base lg:text-lg whitespace-nowrap overflow-x-scroll scrool-none
const Test = () => {
  return (
    <div className="w-full h-auto bg-red-400 ">
      <div>
        <div className="sticky top-0 flex items-center px-4 pt-4 box-border text-gray-300 md:text-base lg:text-lg whitespace-nowrap overflow-x-scroll scrool-none ">
          Sticky Heading 1
        </div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 1</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0">Sticky Heading 2</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <div className="sticky top-0 ">Sticky Heading 3</div>
        <p className="py-4">
          Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
          Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
          lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
    </div>
  );
};

export default Test;
