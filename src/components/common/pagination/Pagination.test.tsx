import { create } from "react-test-renderer";
import { Pagination } from "components/common/pagination/Pagination";

describe('Pagination component test', () => {
    test('Count of button should be correct', ()=>
    {
        const component = create(<Pagination pagesCount={5} currentPage={1} onPageClick={()=>{}} />);
        const root = component.root;
        const buttons = root.findAllByType('button');
        expect(buttons.length).toBe(9);
    });

    test('Go to start button should be deactivate when it is page 1', ()=>
    {
        const component = create(<Pagination pagesCount={5} currentPage={1} onPageClick={()=>{}} />);
        const root = component.root;
        const buttons = root.findAllByType('button');
        expect(buttons[0].props.disabled).toBe(true);
    });
});

