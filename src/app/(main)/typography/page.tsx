import type { PageComponent } from '@/app/serverComponent';

const TypographyPage: PageComponent = () => {
  return (
    <section>
      <div className="container">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Phasellus tincidunt pellentesque fringilla. In vehicula, nibh at euismod accumsan, augue erat feugiat dui, sit amet tempus nisl dolor vel erat. Nulla quis malesuada ipsum, vel molestie ex. Quisque a turpis dolor. Donec non turpis a sem placerat pulvinar. Praesent vel erat scelerisque, lobortis lectus ut, volutpat turpis. Aenean quis mattis dolor. Quisque nulla mauris, pellentesque tristique rutrum sit amet, dapibus nec lectus. Phasellus vestibulum dui lectus, ac lacinia nisi ornare vitae.</p>
        <p>Nam lobortis nibh justo, at ultricies nibh molestie a. Sed vestibulum ipsum quis dolor molestie bibendum. Donec euismod, neque in lobortis semper, augue tellus ultrices risus, quis tincidunt lorem risus rutrum nisl. Donec congue lacus tellus, sit amet rhoncus lorem ultrices ut. Fusce porttitor lobortis arcu placerat gravida. Integer varius, turpis imperdiet ultricies elementum, felis ipsum tincidunt arcu, at facilisis nisl risus a tortor. Suspendisse vel accumsan lorem, a venenatis mi. Vestibulum sodales nisi eu dui ornare, eu gravida neque sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed orci leo, aliquam eget turpis id, pellentesque scelerisque tellus. Quisque vehicula pretium nunc.</p>
        <p className="lead">lead</p>
      </div>
    </section>
  );
};

export default TypographyPage;
