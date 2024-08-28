"use client";

import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { db } from "@/utils/db";
import { Player } from "@/utils/schema";
import { desc } from "drizzle-orm";
import { toast } from "sonner";

const LeaderboardPage = () => {
    const [loading, setLoading] = useState(false);
    const [playersList, setPlayersList] = useState([]);

    const getAllPlayers = async () => {
        setLoading(true);
        try {
            const result = await db
                .select()
                .from(Player)
                .orderBy(desc(Player?.points))
                .limit(20);
            if (result) {
                setPlayersList(result)
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>Internal error occured while fetching all players.</p>
            )
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPlayers();
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold mb-10">Top Players</h2>
            <Table>
                <TableCaption className='my-2'>Top players all around the globe.</TableCaption>
                <TableHeader className='bg-dark-100'>
                    <TableRow>
                        <TableHead className="w-[100px]">Profile</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Fullname</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    loading || playersList.length === 0 ? (
                        <TableBody className='animate-pulse'>
                            <TableRow>
                                <TableCell className="font-medium"> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell className="text-right"> ... </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium"> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell> ... </TableCell>
                                <TableCell className="text-right"> ... </TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {
                                playersList?.map((player, index) => (
                                    <TableRow key={player?.id || index}>
                                        <TableCell className="font-medium flex flex-col items-center gap-2">
                                            <img src={player?.image} alt="profile" className='w-10 h-10 rounded-full' />
                                            {
                                                index === 0 && (
                                                    <p className='text-sm text-yellow-500'>1st</p>
                                                )
                                            }
                                            {
                                                index === 1 && (
                                                    <p className='text-sm text-gray-400'>2nd</p>
                                                )
                                            }
                                            {
                                                index === 2 && (
                                                    <p className='text-sm text-amber-600'>3rd</p>
                                                )
                                            }
                                        </TableCell>
                                        <TableCell> {player?.email} </TableCell>
                                        <TableCell> {player?.name} </TableCell>
                                        <TableCell> {player?.username} </TableCell>
                                        <TableCell> {player?.createdAt} </TableCell>
                                        <TableCell className="text-right"> {player?.points} </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    )
                }
            </Table>
        </div>
    );
};

export default LeaderboardPage;
