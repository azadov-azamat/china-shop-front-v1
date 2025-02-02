
interface DateFormatProps {
    currentDate?: string | null;
    isTime?: boolean;
    className?: string;
}

export default function Component({currentDate, isTime = true, className}: DateFormatProps): JSX.Element {
    if (!currentDate) return <div></div>

    const new_date = new Date(currentDate)

    if (new_date !== null) {
        return (
            <span className={`text-center ${className}`}>
                 {isTime ? new_date.getHours().toString().length <= 1 ? `0${new_date.getHours()}:` : `${new_date.getHours()}:` : ''}
                {isTime ? new_date.getMinutes().toString().length <= 1 ? `0${new_date.getMinutes()}` : new_date.getMinutes() : ''} &nbsp;
                {new_date.getDate().toString().length <= 1 ? `0${new_date.getDate()}` : new_date.getDate()}.
                {(new_date.getMonth() + 1).toString().length <= 1 ? `0${new_date.getMonth() + 1}` : new_date.getMonth() + 1}.
                {new_date.getFullYear()}
            </span>
        )
    }
    return <div></div>
}