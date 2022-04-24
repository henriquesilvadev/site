import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={400}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
