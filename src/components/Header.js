export const Header = ({heading, subHeading}) => {//without the props you would get an error beacuse they are utilizing the props data
  return (
    <section className="header">
        <h1 data-testid="heading">{heading}</h1>
        <p data-testid="subHeading">{subHeading}</p>
    </section>
  )
}
