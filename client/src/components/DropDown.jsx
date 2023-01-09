import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const DropDown = ({data}) => {
    const [selected, setSelected] = useState(data[0]);

    return (
        <div className="fixed w-44 hover:bg-neutral-600 duration-200 px-4 rounded-md">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <Listbox.Button className="flex justify-evenly  w-full rounded-xl">
                            <span>{selected.name}</span>
                            <span className="flex justify-center items-center">
                                <ChevronDownIcon className="w-6"/>
                            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-xl bg-neutral-600">

                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox> 
        </div>
    );
}

export default DropDown;