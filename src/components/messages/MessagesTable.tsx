import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Message } from '@/data/mockMessages';
import { formatDistanceToNow } from 'date-fns';
import { ChevronRight, Mail } from 'lucide-react';

interface MessagesTableProps {
  messages: Message[];
  type: 'received' | 'sent';
  onMessageClick: (message: Message) => void;
}

export function MessagesTable({ messages, type, onMessageClick }: MessagesTableProps) {
  return (
    <div className="rounded-md border bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50 sticky top-0 z-10">
          <TableRow>
            <TableHead className="w-[300px] font-semibold text-slate-700">
              {type === 'received' ? 'Sender' : 'Recipient'}
            </TableHead>
            <TableHead className="font-semibold text-slate-700">Enquiry</TableHead>
            <TableHead className="w-[180px] text-right font-semibold text-slate-700">Date & Time</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => {
            const otherParty = type === 'received' ? message.sender : message.recipient;
            const isUnread = message.status === 'new';

            return (
              <TableRow
                key={message.id}
                className={`cursor-pointer transition-colors hover:bg-slate-50/80 group ${
                  isUnread ? 'bg-blue-50/30' : ''
                }`}
                onClick={() => onMessageClick(message)}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-9 w-9 border border-slate-200">
                        <AvatarImage src={otherParty.avatar} alt={otherParty.name} />
                        <AvatarFallback className="bg-slate-100 text-slate-600 text-xs font-medium">
                          {otherParty.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      {isUnread && (
                        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-600 border-2 border-white" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm ${isUnread ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>
                        {otherParty.name}
                      </span>
                      {otherParty.organization && (
                        <span className="text-xs text-slate-500 truncate max-w-[180px]">
                          {otherParty.organization}
                        </span>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${isUnread ? 'font-medium text-slate-900' : 'text-slate-700'}`}>
                        {message.enquiry.title}
                      </span>
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal text-slate-500 border-slate-200">
                        {message.enquiry.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-500 truncate max-w-[300px] sm:max-w-[400px]">
                      {message.content}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-col items-end gap-0.5">
                    <span className={`text-sm ${isUnread ? 'font-medium text-slate-900' : 'text-slate-600'}`}>
                      {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                    </span>
                    <span className="text-xs text-slate-400 hidden group-hover:inline-block transition-opacity">
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
