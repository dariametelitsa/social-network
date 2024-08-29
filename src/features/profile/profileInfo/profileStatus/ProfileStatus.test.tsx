import { act, create } from "react-test-renderer";
import { ProfileStatus } from "features/profile/profileInfo/profileStatus/ProfileStatus";

const fakeFunction = (status: string): Promise<void> => {
    return new Promise((res) => {})
}

describe('Profile status component', () => {
    test('Status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Status'} updateStatus={fakeFunction}/>);
        const instance = component.getInstance() as unknown as ProfileStatus; // Type assertion
        if(instance) {
            expect(instance.state.status).toBe('Status');
        }
    });

    test('After creation <span> with correct status should be displayed', () => {
        const component = create(<ProfileStatus status={'Status'} updateStatus={fakeFunction}/>);
        const root = component.root;
        if(root) {
            const p = root.findByType("p");
            expect(p).not.toBeNull();
        }
    });

    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'Status'} updateStatus={fakeFunction}/>);
        const root = component.root;
        if(root) {

            expect(() => {
                const input = root.findByType('input');
            }).toThrow();
        }
    });

    test('After creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status={'Status'} updateStatus={fakeFunction}/>);
        const root = component.root;
        if(root) {
            const p = root.findByType("p");
            expect(p.children[0]).toBe('Status');
        }
    });

    test('Input should be displayed in edit mode instead of span', () => {
        const component = create(<ProfileStatus status={'Status'} updateStatus={fakeFunction}/>);
        const root = component.root;
        if(root) {
            const p = root.findByType("p");
            p.props.onDoubleClick();
            const input = root.findByType('input');
            expect(input.props.value).toBe('Status');
        }
    });

    test('Callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Status'} updateStatus={mockCallback}/>);
        const instance = component.getInstance() as unknown as ProfileStatus;
        if(instance) {
            instance.deactivateEditMode();
            expect(mockCallback.mock.calls.length).toBe(1);
        }
    });
})