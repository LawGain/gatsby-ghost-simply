import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { relativeUrl } from "../../../utils/relativeUrl"

const SidebarPostCard = ({ widgetTitle, widgetPosts }) => (
    <div className="sidebar-items mb-8 lg:sticky lg:top-32">
        <h3 className="sidebar-title underscore is-center text-lg text-center font-medium text-title"><span>{widgetTitle}</span></h3>

        {widgetPosts.map((item, i) => (
            <div className={`sp-small relative ` + (i < widgetPosts.length - 1 ? `mb-5` : ``) + ` has-overlay godo-tracking`}
                data-event-category="Sidebar"
                data-event-action="Post"
                data-event-label={item.node.url}
                data-event-non-interaction="true"
                key={item.node.id}>
                {/* {!-- <div className="sp-n flex-none u-fontSizeLarger u-lineHeight1">0{{@number}}</div> --} */}
                <Link to={relativeUrl(item.node.url)} className="flex">
                    {item.node.feature_image &&
                        <figure className="w-32 h-20 relative overflow-hidden rounded">
                            <img className="block w-full object-cover object-center inset-0 absolute h-full" src={item.node.feature_image} alt={item.node.title} width="128" height="80"/>
                            <span className="inset-0 bg-primary absolute flex items-center justify-center overlay-toggle">
                                <svg className="icon h-6 w-6 text-white"><use xlinkHref="#icon-arrow"></use></svg>
                            </span>
                        </figure>
                    }

                    <div className="pl-4 flex-1 overflow-hidden flex flex-col justify-center">
                        <h3 className="sp-small-title text-base font-semibold mb-1 leading-tight text-title">{item.node.title}</h3>

                        <div className="hh-date flex items-center text-gray-500 text-sm">
                            <time className="datetime capitalize" dateTime={item.node.published_at} title={item.node.updated_at && `Updated ` + item.node.updated_at} >{item.node.published_at_pretty}</time>
                        </div>
                    </div>
                </Link>
            </div>
        ))
        }
    </div>
)

SidebarPostCard.propTypes = {
    widgetPosts: PropTypes.array.isRequired,
    widgetTitle: PropTypes.string,
}

export default SidebarPostCard
