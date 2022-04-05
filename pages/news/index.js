export function getStaticProps(context) {
    return {
        props: {
            data: context.preview ? "draft the preview" :"Preview to publish"
        }
    }

}

const News = ({ data }) => {
    return (
        <div>{data}</div>
    )
}

export default News