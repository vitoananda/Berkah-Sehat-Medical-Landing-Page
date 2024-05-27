import className from 'classnames';

type IButtonProps = {
  children: React.ReactNode;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    'inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-xl hover:bg-primary-600': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          /* Define styles inline since tailwind does not support @apply in JSX */
          div {
            @apply cursor-pointer;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
