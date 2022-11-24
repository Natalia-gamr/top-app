import styles from './Tag.module.css'
import cn from 'classnames'
import { TagProps } from './Tag.props'


export const Tag = ({ size = 'M', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.S]: size == 'S',
            [styles.M]: size == 'M',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
        })}
            {...props}
        >
            {
                href ? <a href={href}>{children}</a> : <>{children}</>

            }

        </div>
    )
}