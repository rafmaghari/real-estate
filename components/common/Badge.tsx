type Props = {
    text: string
}
const Badge = ({text}: Props ) => {
    return (
        <div className="flex justify-center">
            <p className="mb-3 w-fit rounded-lg bg-red-100 text-red-900 font-bold px-4 py-2 text-xs">{text}</p>
        </div>
    );
};

export default Badge;