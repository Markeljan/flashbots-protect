'use client'

import React, { useEffect, useState } from "react"
import FlashbotsProtectButton from 'protect-button'
import Checkbox from '@/components/flashbots-protect/checkbox'
import { Builder, useSupportedBuilders } from '@/lib/use-supported-builder'
import { buttonVariants } from "@/components/ui/button"
import * as Tabs from '@radix-ui/react-tabs';

const ProtectButtonSelector = () => {
    const supportedBuilders = useSupportedBuilders()
    const [selectedBuilders, setSelectedBuilders] = useState<string[]>([])
    const [calldata, setCalldata] = useState(false)
    const [logs, setLogs] = useState(false)
    const [contractAddress, setContractAddress] = useState(false)
    const [functionSelector, setFunctionSelector] = useState(false)
    const [noHints, setNoHints] = useState(false)
    const [curatedBuilders, setCuratedBuilders] = useState<Builder[]>()
    const [allBuilders, setAllBuilders] = useState(false)
    const [advancedOptionsShown, setAdvancedOptionsShown] = useState(false)

    const hints = advancedOptionsShown ? {
        calldata,
        logs,
        contractAddress,
        functionSelector,
        hash: true,
    } : undefined

    const onSetNoHints = (val: boolean) => {
        setNoHints(val);
        if (val === true) {
            // We have to also clear all of the other hints if someone selects no hints.
            setCalldata(false);
            setLogs(false);
            setContractAddress(false);
            setFunctionSelector(false);
        }
    }

    // If the user selects any other hint, the "none" option should be deselected. TODO Is there
    // a more elegant way to handle this than wrapping each hint update in a callback.

    const onSetCalldata = (val: boolean) => {
        setNoHints(false);
        setCalldata(val);
    }

    const onSetLogs = (val: boolean) => {
        setNoHints(false);
        setLogs(val);
    }

    const onSetFunctionSelector = (val: boolean) => {
        setNoHints(false);
        setFunctionSelector(val);
    }

    const onSetContractAddress = (val: boolean) => {
        setNoHints(false);
        setContractAddress(val);
    }

    const toggleBuilder = (name: string) => {
        if (selectedBuilders.includes(name)) {
            if (selectedBuilders.length === curatedBuilders?.length) {
                setAllBuilders(false);
            }
            setSelectedBuilders([...selectedBuilders].filter(b => b !== name))
        } else {
            if (curatedBuilders?.length && selectedBuilders.length === curatedBuilders.length - 1) {
                setAllBuilders(true);
            }
            setSelectedBuilders(selectedBuilders.concat(name))
        }
    }

    const toggleAllBuilders = (val: boolean) => {
        setAllBuilders(val);
        if (val === true) {
            const allCuratedBuilderNames = curatedBuilders?.map(builder => builder.name.toLowerCase());
            setSelectedBuilders(allCuratedBuilderNames || []);
        } else {
            setSelectedBuilders([]);
        }
    }

    const BuilderCheckbox = ({ name }: { name: string }) => <Checkbox label={name} id={`builder_${name}`} checked={selectedBuilders.includes(name.toLowerCase())} onChange={(_) => toggleBuilder(name.toLowerCase())} />

    useEffect(() => {
        async function init() {
            if (!curatedBuilders) {
                setCuratedBuilders(await supportedBuilders)
            }
        }
        init()
    }, [curatedBuilders, supportedBuilders])

    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-4">
                <div className={buttonVariants({ size: "lg", variant: "default" })}>
                    <FlashbotsProtectButton
                        hints={advancedOptionsShown ? hints : {}}
                        builders={advancedOptionsShown ? selectedBuilders : undefined}>
                        Add Flashbots RPC
                    </FlashbotsProtectButton>
                </div>
                <button
                    className={buttonVariants({ size: "lg", variant: "info" })}
                    onClick={() => setAdvancedOptionsShown(!advancedOptionsShown)}
                >
                    Advanced Options
                </button>
            </div>
            <div className={advancedOptionsShown ? "flex flex-col md:flex-row gap-4 my-8 mt-6" : "hidden"}>
                <Tabs.Root
                    className="flex flex-col w-[300px] shadow-[0_2px_10px] min-h-[270px] rounded-md overflow-hidden dark:bg-mauve-5 dark:text-cyan-12 "
                    defaultValue="tab1"
                >
                    <Tabs.List className="shrink-0 flex border-b border-cyan-12" aria-label="config">
                        <Tabs.Trigger
                            className="bg-mauve-2 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve-11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-mauve-12 data-[state=active]:text-mauve-12 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active] outline-none cursor-pointer dark:text-cyan-12 dark:bg-mauve-5"
                            value="tab1"
                        >
                            MEV-Share Hints
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className="bg-mauve-2 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve-11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-mauve-12 data-[state=active]:text-mauve-12 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]outline-none cursor-pointer dark:text-cyan-12 dark:bg-mauve-5"
                            value="tab2"
                        >
                            Builders
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content
                        className="grow p-5 bg-mauve-2 rounded-b-md outline-none dark:bg-mauve-5 dark:text-cyan-12 text-mauve-11 text-[15px] leading-normal"
                        value="tab1"
                    >
                        <div>
                            <Checkbox label='Calldata' id='calldata' checked={calldata} onChange={onSetCalldata} />
                            <Checkbox label='Contract Address' id='contractAddress' checked={contractAddress} onChange={onSetContractAddress} />
                            <Checkbox label='Function Selector' id='functionSelector' checked={functionSelector} onChange={onSetFunctionSelector} />
                            <Checkbox label='Logs' id='logs' checked={logs} onChange={onSetLogs} />
                            <Checkbox label='None' id='none' checked={noHints} onChange={onSetNoHints} />
                        </div>
                    </Tabs.Content>
                    <Tabs.Content
                        className="grow p-5 bg-mauve-2 rounded-b-md outline-none text-mauve-11 text-[15px] leading-normal dark:bg-mauve-5 dark:text-cyan-12"
                        value="tab2"
                    >
                        <div>
                            {curatedBuilders && curatedBuilders.map((builder, idx) => <BuilderCheckbox name={builder.name} key={idx} />)}
                            {curatedBuilders && <Checkbox label={"all"} checked={allBuilders === true} onChange={toggleAllBuilders} id={"all"} />}
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </div>
    )
}

export default ProtectButtonSelector